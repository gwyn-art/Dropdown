import cxs from 'cxs'

export default  {
    container: cxs({
        height: '45px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        borderBottom: '1px solid #C1D6F0',
        cursor: 'pointer',
        color: '#5F5F5F',
        '.selected': {
            background: '#f2f6fc'
        }
    }),
    avatar: cxs({
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '50%',
        overflow: 'hidden',
        marginRight: '10px'
    }),
    name: cxs({
        '.selected': {
            fontWeight: 700
        }
    }),
    email: cxs({
        marginLeft: 'auto',
    })
}