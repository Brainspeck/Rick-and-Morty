import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
         {
         characters.map(character =>(
            <Card  key={character.id} onClose={() => window.alert('Emulamos que se cierra la card')} name ={character.name} species = {character.species} gender= {character.gender} image={character.image} />
         ))
         }

      </div>
   );
}
