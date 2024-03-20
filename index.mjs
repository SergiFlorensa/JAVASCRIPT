import foods from './foods.mjs';

const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];

// Function to calculate the total of the ticket
const calculateTotalTicket = (ticket, foods) =>
	ticket
		// Find the food corresponding to the icon
		.map((item) => foods.find((food) => food.icon === item)) 
		// Filter out items that were not found
		.filter(Boolean) 
		// Sum up the prices
		.reduce((total, food) => total + food.price, 0); 

// Calculate the total of the ticket
const totalTicket = calculateTotalTicket(ticket, foods);
console.log(
	`Total of the ticket: ${JSON.stringify(ticket)} is $${totalTicket.toFixed(2)}`
);

//------------------------7----------------------------

const ingredientesBatido = ['🥛', '🍓', '🍌'];

const batido = ingredientesBatido.join(`+`);
console.log(batido);

//-----------------------8-------------------------

const tickets = [1, 100000, 21, 30, 4]
console.log(tickets.sort());


const mayorAMenor = tickets.sort((a,b) => a - b);
console.log(mayorAMenor);


//-----------------9------------------
const ticket01 = ['☕', '☕', '☕', '☕'];

const ticket02 = ['☕', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];
const comprobacion = ticket01.every((element)=> element === `☕`);
console.log(comprobacion);

const comprobacion2 = ticket02.every((element)=> element === `☕`);
console.log(comprobacion2);

//------------------10----------------

const ticketCompleto = ['🍹', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];

const persona01 = ['☕', '🥐']
const persona02 = ['🍵', '🥖']
const persona03 = ['🍹', '🥪']

const ticketIndividual = (ticket, consumicion) => {
    const individualTicket = [];
    for (const item of consumicion){
        const index = ticket.indexOf(item);

        if(index !== -1){
            individualTicket.push(ticket.splice(index,1)[0]);
        }
    }
    return individualTicket;
};

const persona01ticket = ticketIndividual(ticketCompleto, persona01);
const persona02ticket = ticketIndividual(ticketCompleto, persona02);
const persona03ticket = ticketIndividual(ticketCompleto, persona03);

console.log('Person 1 Ticket:', persona01ticket);
console.log('Person 2 Ticket:', persona02ticket);
console.log('Person 3 Ticket:', persona03ticket);
console.log('Remaining items in the original ticket:', ticketCompleto);
