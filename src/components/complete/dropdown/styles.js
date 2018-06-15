import cxs from 'cxs'

export default {
    dropdownContainer: cxs({
        position: 'relative',
    }),
    defaultList: cxs({
        position: 'absolute',
        top: 'calc(100% + 10px)',
        zIndex: 10
    })
}