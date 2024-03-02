import React, {useRef} from 'react'
import { useForm, FieldValues } from "react-hook-form"
import axios from 'axios'
import Button from "components/Button"
import styles from './AuthPage.module.scss'

const AuthPage = () => {
    const form = useRef<HTMLFormElement>(null)

    const forma = useForm({
        mode: "onChange",
    })

    const { register, handleSubmit, formState, reset } = forma
    const { isValid, touchedFields, errors } = formState

    const login = async (password: string) => {
        try {
            const response = await axios(`https://partnerev.ru/api/login`, {
                method: 'POST',
                data: {
                    password: password
                }
            })
            // Загрзка jwt в redux
        } catch (error) {
            throw error
        }
    }
    
    const onSubmit = (data: FieldValues) => {
        console.log(data.fio, data.email, data.description)
    }

    return (
        <div className={styles.auth__page}>
            <h1 className={styles['auth__page-title']}>Вход в режиме администратора</h1>
                <form
                onSubmit={handleSubmit(onSubmit)}
                ref={form}
                className={styles['auth__page-form']}
                >
                    <div style={{ position: "relative", width: `100%` }}>
                        <input
                            {...register("password", {
                            required: "Обязательное поле",
                            // pattern: {
                            //     value: /^([\wа-яА-ЯёЁ]+[\s]){1,2}[\wа-яА-ЯёЁ]+$/,
                            //     message: "Введите корректные данные...",
                            // },
                            })}
                            className={styles['auth__page-form-input']}
                            placeholder="Введите код доступа*"
                            type='password'
                        />
                        {errors?.password && touchedFields.password && (
                            <div className={styles['auth__page-form-input-message']}>
                            {errors?.password?.message?.toString()}
                            </div>
                        )}
                    </div>
                    <Button
                    isRedirecting={false}
                    mode="light"
                    className={styles['auth__page-form-btn']}
                    disabled={!isValid}
                    type="submit"
                    >
                    Войти
                    </Button>
                </form>
        </div>
    )
}

export default AuthPage