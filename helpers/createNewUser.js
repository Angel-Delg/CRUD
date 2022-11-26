export const createNewUser = allUser => {

    const FormCreateUser = document.querySelector('.formCreateUser')
    const FullNameUser = document.querySelectorAll("input[type='text']")
    const PhoneUser = document.querySelector("input[type='number']")
    let IdMaxUser = allUser.length + 1

    const Auth = {
        name:false,
        surname: false,
        phone:false
    }

    const credenciales = {
        id:IdMaxUser,
    }

    FullNameUser.forEach( element => {
        element.addEventListener('change', ({target}) => {
            
            if(target.dataset.user === 'name' && target.value.length > 2){
                credenciales.name = target.value.trim()
                Auth.name = true
            }

            if(target.dataset.user === 'surname' && target.value.length > 2){
                credenciales.surname = target.value.trim()

                Auth.surname = true
                console.log(Auth)
            }

            target.value || console.error("Haz ingresado pocos datos")

        })
    })

    PhoneUser.addEventListener('change', ({target}) => {
        credenciales.phone = {
            claro: String(target.value.trim()),
            tigo: String(target.value.trim())
        } 

        Auth.phone = true
    })    
    
    // Aqui tenemos objeto de opciones

    const handleCreateUser = async ({id, name, surname, phone}) => {
        const options = {
            method: 'post',
            body: JSON.stringify({
                id,
                name,
                surname,
                phone
            }),
            headers : {
                "content-type": "application/json; charset=utf-8"
            },
        }

        if(Object.values(Auth).includes(false) || Object.values(credenciales).length === 1){
            return console.error('Falta ingresar datos')
        }else{
            const  request = await fetch('http://localhost:3000/users',options)
            const  newUser = await request.json()

            console.log(newUser)
        }
    }

    // Evitar que se dispare
    FormCreateUser.addEventListener('submit', e => {
        e.preventDefault()
        handleCreateUser(credenciales)
    })

}