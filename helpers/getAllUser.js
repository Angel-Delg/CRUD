export const getAllUser = async () => {
    try {    
        const request = await fetch('http://localhost:3000/users')
        const users = await request.json()
        
        const loadingSpinner = document.querySelector('.spinner-container')
        
        
        if(users.length ) {
            loadingSpinner.classList.add('none')    
        }else{
            loadingSpinner.classList.remove('none')
        }

        return users

    } catch (error) {

        console.error(error)
    }
}