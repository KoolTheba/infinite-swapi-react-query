export function Species ({ name, language, averageLifespan }){
    return (
        <li>
            {name}
            <ul>
                <li>Language: {language}</li>
                <li>Average lifespan: {averageLifespan}</li>
            </ul>
        </li>
    )
}