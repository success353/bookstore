import { useState } from "react";

const AddBooks = () => {
    const [input, setInput] = useState({
        title: '',
        description: '',
        imgUrl: ''
    })
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }
    const sendRequest = () => {
        fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify({
                title: input.title,
                description: input.description,
                imgUrl: input.imgUrl
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => console.log(data))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.name && !input.description && !input.imgUrl) {
            return
        } else {
            sendRequest()
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' value={input.title} onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <input type="text" name='description' value={input.description} onChange={handleChange} />
            <label htmlFor="imgUrl">ImgUrl</label>
            <input type="text" name='imgUrl' value={input.imgUrl} onChange={handleChange} />
            <input type="submit" value="Enter" />
        </form>
    );
}

export default AddBooks;