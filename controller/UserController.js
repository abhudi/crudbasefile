import UserModels from "../models/User.js";

const Createuser = async (req, res) => {
    try {
        const { name, fathername, email, phone } = req.body

        const NewUser = new UserModels({
            name, fathername, email, phone
        })
        await NewUser.save()
        res.status(200).json({ success: true, Message: 'User Created SuccessFully', NewUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, Message: 'internal server error', NewUser })
    }

}


// read api

const GetUser = async (req, res) => {
    try {
        const user = await UserModels.find()
        if (!user) {
            return res.status(404).json({ success: false, Message: 'User Not Found' })
        }
        res.status(200).json({ success: true, user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'internal server error' })
    }
}

// update user

const UpdateUser = async (req, res) => {
    try {
        const UserId = req.params.id
        const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body, {
            new: true
        })
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User Not Found' })
        }
        res.status(200).json({ success: true, message: 'User Upated successfully', updatedUser })

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'internal server error' })

    }
}

// Delete user

const DeleteUser = async (req, res) => {
    try {
        const UserId = req.params.id
        const deletedUser = await UserModels.findByIdAndDelete(UserId)
        if (!deletedUser) {
            return res.status(401).json({ success: false, message: "User Not Found" })
        }
        res.status(200).json({ success: true, message: 'user Deleted Successfullly' })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: 'internal server error' })
    }
}


export { Createuser, GetUser, UpdateUser, DeleteUser }