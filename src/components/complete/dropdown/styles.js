import cxs from 'cxs'

export default {
    dropdownContainer: cxs({
        position: 'relative',
    }),
    defaultList: cxs({
        position: 'absolute',
        top: 'calc(100% + 10px)',
        zIndex: 10,
        maxHeight: '600px',
        overflowY: 'auto',
        animationName: 'slidingDropDown',
        animationDuration: '1s'
    }),
    '@keyframes sliding': {
        from: {
            maxHeight: 0
        },
        to: {
            maxHeight: '600px'
        }
    }
}