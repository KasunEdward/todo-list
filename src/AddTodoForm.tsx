import React, { SyntheticEvent } from 'react';
import * as  Yup from 'yup';
import { useFormik } from 'formik';

interface Props {
    addTodo: AddTodo
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const validationSchema = Yup.object({
        todoText: Yup.string().required("Text is required")
    })

    const formik = useFormik({
        initialValues: {
            todoText: ""
        },
        onSubmit: (values: AddTodoObj) => {
            addTodo(values);
        },
        validationSchema: validationSchema,
    });

    const change = (name: string, e:SyntheticEvent) => {
        e.persist();
        formik.handleChange(e);
        formik.setFieldTouched(name, true, false);

    };

    return (
        <form>
            <input
                type='text'
                value={formik.values.todoText}
                name="todoText"
                onChange={change.bind(null, 'text')}
            />
            <button type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                }}
            >
                Add
            </button>

        </form>
    )
}