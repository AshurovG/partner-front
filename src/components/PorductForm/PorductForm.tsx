import React, { useRef, useState } from "react"
import styles from "./PorductForm.module.scss"
import { useLocation } from "react-router-dom"
import { useForm, FieldValues, Controller } from "react-hook-form"
import Button from "components/Button"

type ProductFormProps = {
    onSubmit?: (title: string, description: string, file: File | null) => void
    title?: string
    description?: string
    fileTitle?: string
    isEditing?: boolean
    active?: boolean
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

const ProductForm: React.FC<ProductFormProps> = ({title, description, onSubmit, fileTitle, isEditing, active}) => {
  const location = useLocation()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState(fileTitle)
  const showForm = ![
    "/ashurovvitaly",
    "/rasulovelshan",
    "/derevitskayaevgenia",
  ].includes(location.pathname)
  const form = useRef<HTMLFormElement>(null)

  const forma = useForm({
    mode: "onChange",
  })

  const { register, handleSubmit, formState, control, setValue, setError, clearErrors } = forma
  const { isValid, touchedFields, errors } = formState

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      if (file.size > MAX_FILE_SIZE) {
        setValue("file", null)
        setError("file", {
          type: "manual",
          message: "Размер файла не должен превышать   5 МБ",
        })
        setSelectedFile(null)
        setFileName("")
      } else {
        setSelectedFile(file)
        setFileName(file.name)
        clearErrors("file")
      }
    } else {
      setSelectedFile(null)
      setFileName("")
      clearErrors("file")
    }
  }

  const onFormSubmit = (data: FieldValues) => {
    console.log(data.title, data.phone, data.description)
  }

  return (
    <>
      {showForm && (
        <div className={styles.form}>
          <div id="form" className={styles.form__inner}>
            <h2 className={styles.form__inner_title}>
              Заполните данные
            </h2>
            <form
              onSubmit={handleSubmit(onFormSubmit)}
              ref={form}
              className={styles.form__inner_fields}
            >
              <div style={{ position: "relative", width: `100%` }}>
                <input
                  {...register("title", {
                    required: "Обязательное поле",
                    // pattern: {
                    //   value: /^([\wа-яА-ЯёЁ]+[\s]){1,2}[\wа-яА-ЯёЁ]+$/,
                    //   message: "Введите корректные данные...",
                    // },
                  })}
                  className={styles.form__input}
                  placeholder="Название товара*"
                />
                {errors?.title && touchedFields.title && (
                  <div className={styles.form__input_message}>
                    {errors?.title?.message?.toString()}
                  </div>
                )}
              </div>
              <div style={{ position: "relative", width: `100%` }}>
                <textarea
                  {...register("description", {
                    required: "Обязательное поле",
                  })}
                  className={styles.form__input_big}
                  placeholder="Описание товара*"
                ></textarea>
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
                                <>{fileName}</>
                                )
                            ) : !selectedFile ? (
                                <>Выберите файл</>
                            ) : (
                                <>{fileName}</>
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
      )}
    </>
  )
}

export default ProductForm
