import React, { useRef, useState, useEffect } from "react"
import styles from "./PorductForm.module.scss"
import { useForm, FieldValues, Controller } from "react-hook-form"
import Button from "components/Button"

type ProductFormProps = {
    onSubmit: (title: string, description: string, file: File | null) => void
    isEditing?: boolean
    active?: boolean
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

const ProductForm: React.FC<ProductFormProps> = ({onSubmit, isEditing, active}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const form = useRef<HTMLFormElement>(null)

  const forma = useForm({
    mode: "onChange",
  })

  const { register, handleSubmit, formState, control, setValue, setError, clearErrors, reset, } = forma
  const { isValid, touchedFields, errors } = formState

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changed')
    if (event.target.files) {
      const file = event.target.files[0]
      if (file.size > MAX_FILE_SIZE) {
        setValue("file", null)
        setError("file", {
          type: "manual",
          message: "Размер файла не должен превышать 5 МБ",
        })
        setSelectedFile(null)
      } else {
        setSelectedFile(file)
        clearErrors("file")
      }
    } else {
      setSelectedFile(null)
      clearErrors("file")
    }
  }

  const submitForm = (data: FieldValues) => {
    onSubmit(data.title, data.description, selectedFile)
    console.log(data.title, data.description)
  }

  useEffect(() => {
    reset({
        title: "",
        description: "",
        file: null,
    });
    setSelectedFile(null)
    clearErrors();
}, [active]);

  return (
    <div className={styles.form}>
      <div id="form" className={styles.form__inner}>
        <h2 className={styles.form__inner_title}>
          Заполните данные
        </h2>
        <form
          onSubmit={handleSubmit(submitForm)}
          ref={form}
          className={styles.form__inner_fields}
        >
          <div style={{ position: "relative", width: `100%` }}>
            <Controller
            control={control}
            name="title"
            rules={{ required: "Обязательное поле" }}
            render={() => (
                <input
                {...register("title", {
                    required: "Обязательное поле",
                })}
                className={styles.form__input}
                placeholder="Название*"
                />
                )}
                />
                {errors?.title && touchedFields.title && (
                <div className={styles.form__input_message}>
                    {errors?.title?.message?.toString()}
                </div>
                )}
            </div>
            
            <div style={{ position: "relative", width: `100%` }}>
                <Controller
                control={control}
                name="description"
                rules={{ required: "Обязательное поле" }}
                render={() => (
                    <textarea
                    {...register("description", {
                        required: "Обязательное поле",
                        pattern: {
                        value: /^[\S\s]{1,200}$/,
                        message: "Введите максимум 200 символов",
                        },
                    })}
                    className={styles.form__input_big}
                    placeholder="Введите описание*"
                    ></textarea>
                )}
                />
                {errors?.description && touchedFields.description && (
                <div className={styles.form__input_message}>
                    {errors?.description?.message?.toString()}
                </div>
                )}
            </div>

          <div style={{ position: "relative", width: `100%` }}>
            <div className={styles["form__file"]}>
                <Controller
                    control={control}
                    name="file"
                    rules={{
                    required: isEditing ? false : "Обязательное поле",
                    }}
                    render={({ field, fieldState: { error } }) => (
                    <div>
                        <input
                          {...register("file", {
                          required: "Обязательное поле",
                        })}
                        {...field}
                        type="file"
                        id="inp"
                        accept="image/jpeg, image/png, image/gif, image/bmp, image/webp"
                        style={{ display: "none" }}
                        onChange={(e) => {
                            field.onChange(e)
                            handleFileChange(e)
                            
                        }}
                        />
                        <label htmlFor="inp" className={styles["form__file-label"]}>
                        {isEditing ? (
                            !selectedFile ? (
                            <>Измените файл</>
                            ) : (
                            <>{selectedFile.name}</>
                            )
                        ) : !selectedFile ? (
                            <>Выберите файл</>
                        ) : (
                            <>{selectedFile.name}</>
                        )}
                        </label>
                        {error && (
                        <div className={styles.form__input_message}>
                            {error.message}
                        </div>
                        )}
                    </div>
                    )}
                />
                </div>
            </div>
          <Button
            isRedirecting={false}
            mode="light"
            className={styles.form__submit}
            disabled={!isValid}
            type="submit"
          >
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
