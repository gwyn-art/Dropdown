import React from 'react'
import styles from './styles'

class Dropdown extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            focused: false
        }

        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleFocus (event) {
        event.preventDefault()
        const type = event.type

        if (this.state.focused) return null

        this.setState({ focused: true, type: type }, () => {
            document.addEventListener('click', this.handleBlur)
        });
    }
      
    handleBlur (event) {
        /*
            reason of this line: 
            as far as we want to show dropdown list on elements from focus trigger and without
            we will first get focus event and then click event
            so for not instanlty getting collapsing on focused element 
            we need to prevent collapse for clicking that one 
        */
        if(this.state.type == 'focus' && event.type == 'click' && this.dropdown.contains(event.target)) return null
        
        if (!this.dropdownList.contains(event.target)) {
            this.setState({ focused: false }, () => {
                document.removeEventListener('click', this.handleBlur)
            });  
          
        }
    }
    

    render () {
        const {
            children,
            Trigger,
            listClassName
        } = this.props
        
        const {
            focused,
        } = this.state

        
        return (
            <div
                className = {styles.dropdownContainer}
                onClick = {this.handleFocus}
                onFocus = {this.handleFocus}
                ref = {elm => this.dropdown = elm}>
                <Trigger/>

                {
                    focused ? (
                        <div
                            className = {`${listClassName} ${styles.defaultList}`}
                            ref = { elm => this.dropdownList = elm} >
                            {children}
                        </div>
                    ) : null
                }
                
            </div>
        )
    }
}


export default Dropdown