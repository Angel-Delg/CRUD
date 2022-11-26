export const insertAllUser = users => {

    const tableBody = document.getElementById('TableBody')
    const Fragment = document.createDocumentFragment()
    
    users.forEach( ({ name , surname, phone: {claro , tigo} }) => {
        
        // Creamos los elmentos 
        const PropTr = document.createElement('tr')
        const NameUser = document.createElement('td')
        const SurnameUser = document.createElement('td')
        const PhoneUserClaro = document.createElement('td')

        // Agregamos sus valores
        NameUser.textContent = name
        SurnameUser.textContent = surname
        PhoneUserClaro.textContent = claro

        PropTr.appendChild(NameUser)
        PropTr.appendChild(SurnameUser)
        PropTr.appendChild(PhoneUserClaro)
 
        Fragment.appendChild(PropTr)
    });

    tableBody.appendChild(Fragment)
}