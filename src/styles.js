import cxs from 'cxs'

export default {
    page: cxs({
        display: 'flex',
    }),
    container: cxs({
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '0 0 10px 0 #000',
        width: '500px',
        padding: '10px 0'
    }),
    triggerBtn: cxs({
        background: '#E0E1E2',
        borderRadius: '5px',
        cursor: 'pointer',
        lineHeight: '35px',
        padding: '0 10px',
        minWidth: '200px'
    })
}