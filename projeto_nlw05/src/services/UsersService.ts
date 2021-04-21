import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    async create(email: string) {
        //verificar se o usuario existe
        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findOne({
            email
        });

        //se não existir salvar no banco
        if(userExists) {
            return userExists;
        }

        //se existir retornar o usuario
        const user = usersRepository.create({ email });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersService }