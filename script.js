@import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,900&display=swap');

$text-1: #333;
$text-2: #666;
$text-3: #999;
$line: #CCC;
$time-bg: #EEE;
$background: #F7F7F7;
	
body, html {
	font-family: Red hat Display, sans-serif;
	font-weight: 400;
	line-height: 1.25em;
	letter-spacing: 0.025em;
	color: $text-1;
	background: $background;
}

.center {
	position: absolute;
	top: 50%;
	left: calc(50% + 12rem);
	transform: translate(-50%, -50%);
}

.pic {
	width: 4rem;
	height: 4rem;
	background-size: cover;
	background-position: center;
	border-radius: 50%;
}

.contact {
	position: relative;
	margin-bottom: 1rem;
	padding-left: 5rem;
	height: 4.5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	.pic {
		position: absolute;
		left: 0;
	}

	.name {
		font-weight: 500;
		margin-bottom: 0.125rem;
	}

	.message, .seen {
		font-size: 0.9rem;
		color: $text-3;
	}
	
	.badge {
		box-sizing: border-box;
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
		text-align: center;
		font-size: 0.9rem;
		padding-top: 0.125rem;
		border-radius: 1rem;

		top: 0;
		left: 2.5rem;
		background: $text-1;
		color: white;
	}
}

.contacts {
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate(-6rem, -50%);
	
	width: 24rem;
	height: 32rem;
	padding: 1rem 2rem 1rem 1rem;
	box-sizing: border-box;
	border-radius: 1rem 0 0 1rem;
	
	cursor: pointer;
	
	background: white;
	box-shadow: 
		0 0 8rem 0 rgba(black, 0.1),
		2rem 2rem 4rem -3rem rgba(black, 0.5);
	
	transition: transform 500ms;
	
	h2 {
		margin: 0.5rem 0 1.5rem 5rem;
	}
	
	.fa-bars {
		position: absolute;
		left: 2.25rem;
		
		color: $text-3;
		transition: color 200ms;
		
		&:hover {
			color: $text-2;
		}
	}
	
	.contact:last-child {
		margin: 0;
	}
	
	&:hover {
		transform: translate(-23rem, -50%);
	}
}

.chat {
	position: relative;
	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	width: 24rem;
	height: 38rem;
	z-index: 2;
	box-sizing: border-box;
	border-radius: 1rem;
	
	background: white;
	box-shadow: 
		0 0 8rem 0 rgba(black, 0.1),
		0rem 2rem 4rem -3rem rgba(black, 0.5);
	
	.contact.bar {
		flex-basis: 3.5rem;
		flex-shrink: 0;
		margin: 1rem;
		box-sizing: border-box;
	}
	
	.messages {
		padding: 1rem;
		background: $background;
		flex-shrink: 2;
		overflow-y: auto;
		
		box-shadow: 
			inset 0 2rem 2rem -2rem rgba(black, 0.05),
			inset 0 -2rem 2rem -2rem rgba(black, 0.05);
		
		.time {
			font-size: 0.8rem;
			background: $time-bg;
			padding: 0.25rem 1rem;
			border-radius: 2rem;
			color: $text-3;
			width: fit-content;
			margin: 0 auto;
		}
		
		.message {
			box-sizing: border-box;
			padding: 0.5rem 1rem;
			margin: 1rem;
			background: #FFF;
			border-radius: 1.125rem 1.125rem 1.125rem 0;
			min-height: 2.25rem;
			width: fit-content;
			max-width: 66%;
			
			box-shadow: 
				0 0 2rem rgba(black, 0.075),
				0rem 1rem 1rem -1rem rgba(black, 0.1);
			
			&.parker {
				margin: 1rem 1rem 1rem auto ;
				border-radius: 1.125rem 1.125rem 0 1.125rem;
				background: $text-1;
				color: white;
			}
			
			.typing {
				display: inline-block;
				width: 0.8rem;
				height: 0.8rem;
				margin-right: 0rem;
				box-sizing: border-box;
				background: #ccc;
				border-radius: 50%;
				
				&.typing-1 { animation: typing 3s infinite }
				&.typing-2 { animation: typing 3s 250ms infinite }
				&.typing-3 { animation: typing 3s 500ms infinite }
			}
		}
	}
	
	.input {
		box-sizing: border-box;
		flex-basis: 4rem;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		padding: 0 0.5rem 0 1.5rem;
		
		i {
			font-size: 1.5rem;
			margin-right: 1rem;
			color: $text-2;
			cursor: pointer;
			transition: color 200ms;
			
			&:hover {
				color: $text-1;
			}
		}
		
		input {
			border:none;
			background-image:none;
			background-color: white;
			padding: 0.5rem 1rem;
			margin-right: 1rem;
			border-radius: 1.125rem;
			flex-grow: 2;
			box-shadow: 
				0 0 1rem rgba(black, 0.1),
				0rem 1rem 1rem -1rem rgba(black, 0.2);
			
			font-family: Red hat Display, sans-serif;
			font-weight: 400;
			letter-spacing: 0.025em;
			
			&:placeholder {
				color: $text-3;
			}
		}
	}
}


@keyframes typing {
	0%, 75%, 100% {
		transform: translate(0, 0.25rem) scale(0.9);
		opacity: 0.5;
	}
	
	25% {
		transform: translate(0, -0.25rem) scale(1);
		opacity: 1;
	}
}

// Obviously in a real app I would load this from a DB with JS
// For now this is a nice quick and easy method to mockup

.pic.stark { background-image: url('https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/73/SMH_Mentor_6.png')}
.pic.banner { background-image: url('https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/BruceHulk-Endgame-TravelingCapInPast.jpg')}
.pic.thor { background-image: url('https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/98/ThorFliesThroughTheAnus.jpg')}
.pic.danvers { background-image: url('https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/05/HeyPeterParker.png')}
.pic.rogers { background-image: url('https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/7c/Cap.America_%28We_Don%27t_Trade_Lives_Vision%29.png')}
