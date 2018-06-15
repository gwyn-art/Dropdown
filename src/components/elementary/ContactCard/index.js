import React from 'react'
import styles from './styles'

const ContactCard = ({avatar, name, email, selected, onClick}) => {
    const strSelected = selected ? 'selected' : ''

    return (
        <div 
            onClick = {onClick}
            className = {`${styles.container} ${strSelected}`}>
            <img 
                src = {avatar}
                className = {styles.avatar}
                height = '40'
                width = '40' />
            <div
                className = {`${styles.name} ${strSelected}`}> 
                {name} 
            </div>
            <div
                className = {styles.email}> 
                {email} 
            </div>
        </div>
    ) 
}

export default  ContactCard