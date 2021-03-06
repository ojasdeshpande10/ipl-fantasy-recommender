import React, { Component } from 'react';
import './ticks.css';



class Ticks extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          players:[],
          fielders:[],
          bowlers:[]
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      
    
      handleSubmit(event) {
    
        event.preventDefault();
        let team=document.getElementById('feam').value;
    
        fetch('/aliens/players1',{
           method:'POST',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
          body:JSON.stringify({team:team})
    
        })
        
        .then(res => res.json())
        .then(players=> this.setState({players},() => console.log('Players fetched ',players)));

        fetch('/aliens/players2',{
            method:'POST',
           headers : { 
             'Content-Type': 'application/json',
             'Accept': 'application/json'
            },
           body:JSON.stringify({team:team})
     
         })
         
         .then(res => res.json())
         .then(fielders=> this.setState({fielders},() => console.log('Players fetched ',fielders)));



     fetch('/aliens/players3',{
      method:'POST',
     headers : { 
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      },
     body:JSON.stringify({team:team})

   })
   
   .then(res => res.json())
   .then(bowlers=> this.setState({bowlers},() => console.log('Players fetched ',bowlers)));








    
    
    
    
    
    
      }
    
      render() {
        return (
            <div>
            <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick one of the two teams playing:
              <select  id="feam">
                <option value="MI">Mumbai Indians</option>
                
                <option value="RCB">Royal Challengers Bangalore</option>
                <option value="DC">Delhi Capitals</option>
                <option value="SRH">Sunrisers Hyderabad</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>
<h2>Must Have Players</h2 >

<ul>
  {
    this.state.bowlers.map(bowler=>
    <li key={bowler.id}>{bowler.name}         {bowler.team}</li>)
  }
</ul>
 

</div>
           <div>
           <h2>Safe Bets</h2>
          
           <ul>
             {
               this.state.players.map(player=>
               <li key={player.id}>{player.name}         {player.team}</li>)
             }
           </ul>
           
      </div>
        <div>
        <h2>High Risk High Reward</h2 >

           <ul>
             {
               this.state.fielders.map(fielder=>
               <li key={fielder.id}>{fielder.name}         {fielder.team}</li>)
             }
           </ul>
        </div>
      </div>
     
    </div>
    
     
          
        )
      }
    }
    

  export default Ticks;