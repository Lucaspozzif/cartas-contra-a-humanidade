import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div>
            <p>Nem a página 404 está configurada ainda {":("}</p>
            <Link to={'/'}>
                <button>
                    Voltar
                </button>
            </Link>
        </div>
    )
}