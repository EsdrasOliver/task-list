import './index.css'

function Loading() {
    return (
        <div className="loader">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <span>Carregando...</span>
        </div>
    );
}

export default Loading;