import { createNewUser } from "./helpers/createNewUser.js";
import { getAllUser } from "./helpers/getAllUser.js";
import { insertAllUser } from "./helpers/insertAllUser.js";

document.addEventListener('DOMContentLoaded', async e => {

    // Cargamos los users e insertamos
    const allUser = await getAllUser()
    insertAllUser(allUser)
    createNewUser(allUser)

})