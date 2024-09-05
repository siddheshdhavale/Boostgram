import { ID } from 'appwrite';
import { INewUser } from "../../types";
import { account, appwriteConfig, avatars, databases } from './config';
import { Url } from 'url';

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name

        )

        if(! newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,

        })


        return newUser;

    } catch (error) {
        console.log(error);
        return error;

    }

}

export async function saveUserToDB(user: {
    accountId: String;
    email: String;
    name: String;
    imageUrl: Url;
    username?: String;

}) {
    try{
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )

        return newUser;

    } catch (error) {
        console.log(error);
    }

} 