export default function Block1({ description, name, calories, sugar, fat }) {
     return <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <span>{calories} calories, {sugar} sugar, {fat} fat</span>
     </div>
}