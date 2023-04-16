export function Person ({ name, hairColor, eyeColor }){
    return (
        <li>
            {name}
            <ul>
                <li>Hair: {hairColor}</li>
                <li>Eyes: {eyeColor}</li>
            </ul>
        </li>
    )
}