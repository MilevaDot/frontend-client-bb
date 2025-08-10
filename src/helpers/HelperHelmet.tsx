import { Helmet } from 'react-helmet'

const HelperHelmet = ({ title, description } : {
    title: string,
    description?: string
}) => {
    return (
        <Helmet>
            {
                title && <title>{title}</title>
            }
            {
                description && <meta name='description' content={description} />
            }
        </Helmet>
    )
}

export default HelperHelmet