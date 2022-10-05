import Image from 'next/image'

const BookItem = ({ title, imgUrl, description, id }) => {
    return (
        <li>
            <Image src={imgUrl} alt={title} width={300} height={400} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}
export default BookItem