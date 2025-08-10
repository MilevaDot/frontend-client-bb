const FetchAuth = async (input: RequestInfo, init: RequestInit = {}): Promise<Response | undefined> => {
    const token = localStorage.getItem('token')
    
    let authInit = {
        ...init,
        headers: {
            ...(init.headers || {}),
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }

    let response = await fetch(input, authInit)

    if (response.status === 401) {
        const refresh  = localStorage.getItem('refresh_token')
        const refreshRes = await fetch('http://localhost:5000/refreshtoken', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${refresh}`,
            },
        })

        if (refreshRes.ok) {
            const { token: newToken } = await refreshRes.json()
            localStorage.setItem('token', newToken)

            authInit.headers = {
                ...authInit.headers,
                'Authorization': `Bearer ${newToken}`,
            }

            response = await fetch(input, authInit)

        } else {
            localStorage.removeItem('token')
            localStorage.removeItem('refresh_token')
            window.location.href = '/signin'
            return
        }
    }

    return response
}

export default FetchAuth