import loadingGif2 from '../assets/loading.gif'

const Loading = () => {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
            <img src={loadingGif2} alt="loader"/>
        </div>
    )
}

export default Loading