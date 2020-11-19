import React, { useState } from "react";
import "./Landing.css";
import img1 from "./assets/logo.png";
import img2 from "./assets/sponsors logo/GitHub_Logo.svg";
import img3 from "./assets/sponsors logo/amulya.png";
import img4 from "./assets/sponsors logo/Devfolio.svg";
import img5 from "./assets/sponsors logo/portis_logo.svg";
import img6 from "./assets/sponsors logo/fold.svg";
import img7 from "./assets/sponsors logo/matic.svg";
import img8 from "./assets/sponsors logo/taskade-logo.png";
import img9 from "./assets/sponsors logo/wolfram-corporate-logo-stacked-lg-1.png";
import img10 from "./assets/sponsors logo/black-horizontal.svg";
import img11 from "./assets/sponsors logo/Bugsee-Logo.svg";
import { Button } from "antd";
import Form from "./Form";

const Landing = () => {
	const [show, updateShow] = useState(false);
	const ButtonClick = () => {
		updateShow(true);
	};

	return (
		<div>
			<div className='background-img'></div>
			<canvas className='overlay'></canvas>
			<div className='bgiii'>
				<img src={img1} className='mainlogo' alt='centered image' />
				<h1 className='asdasd'>Coming Soon | March 2021</h1>
				<div
					style={{
						color: "rgb(80, 80, 80)",
						textAlign: "center",
						fontSize: "23px",
						top: "-3%",
						position: "relative",
					}}
				>
					{" "}
					19-21 March
				</div>
				{/* <form id='ContactForm'>
					<div className='EmailInput'>
						<input
							className=''
							type='email'
							placeholder='Enter your Email to Pre-Register and stay Updated!'
						></input>
						<button type='submit' className='button'>
							{" "}
							<i className='fas fa-arrow-right aaaa'></i>
						</button>
					</div>
				</form> */}
			</div>
			<pre></pre>
			<div className='content0fpage'>
				<div className='content'>
					<div id='about'>
						<h1 align='center'>About</h1>
						<div style={{ fontWeight: "500" }}>
							Equinox is a 36-Hour hackathon in which the
							participants’ ideas will not just be limited to
							problem statements based on Web development,
							hardware, Artificial Intelligence etc. The hack aims
							to crank the creative cogs of the participants. You
							have the opportunity and the resources to express
							your creativity, ingenuity and determination to
							explore anything you want. Whether you’re new to
							hacks or a seasoned pro, there’s something for
							everyone! You’re welcome with or without a team. We
							will provide resources and mentors for your aid.
							Also, did we mention exciting goodies and takeaways?
							The domains of the hack include Robotics, Industrial
							Automation, Healthcare, Financial-Technology and
							open innovation. Let us make you an offer you can’t
							refuse: Timely and precise reviews for each
							participant and ample time with the judges. So, what
							are you waiting for? Come build using hardware,
							software, or anything you want with other hackers!
							You don’t have to know how to code to be a hacker.
							Hackers can be students, designers, or just any
							tech-lover out there!
						</div>
					</div>
					<br />
					<br />
					<br />
					<pre></pre>
					<h1>FAQ</h1>
					<div className='faqq'>
						<div className='faq1'>
							<div className='faq'>
								<div className='faq-item'>
									<div className='faq-item-header'>
										What are the rules?
									</div>
									<div className='faq-item-body'>
										<div className='faq-item-body-content'>
											We want our Hack to be fun and fair
											to everyone. Your project should be
											started from scratch and worked on
											only during the 36 hours, and you
											may only incorporate outside
											resources (code, graphics, sound,
											etc) that are freely licensed and
											accessible to all participants
											equally. Of course, maintain a
											positive, respectful attitude toward
											your fellow hackers throughout the
											event. We ask that all attendees
											follow the MLH Code of Conduct.
										</div>
									</div>
								</div>
								<div className='faq-item'>
									<div className='faq-item-header'>
										What will I need to br /ing?
									</div>
									<div className='faq-item-body'>
										<div className='faq-item-body-content'>
											Student ID is compulsory and
											anything you’d need for 36 hours:
											laptop, charger, deodorant (!),
											water, etc. You won’t need food;
											we’ve got you covered there:)
										</div>
									</div>
								</div>
								<div className='faq-item'>
									<div className='faq-item-header'>
										Are hardware hacks allowed?
									</div>
									<div className='faq-item-body'>
										<div className='faq-item-body-content'>
											Yes, of course!
										</div>
									</div>
								</div>
							</div>
							<div className='faq'>
								<div className='faq-item'>
									<div className='faq-item-header'>
										How much does it cost?
									</div>
									<div className='faq-item-body'>
										<div className='faq-item-body-content'>
											Thanks to the generosity of our
											sponsors, we’re able to put up
											events like these for free.
										</div>
									</div>
								</div>
								<div className='faq-item'>
									<div className='faq-item-header'>
										How many people in a team?
									</div>
									<div className='faq-item-body'>
										<div className='faq-item-body-content'>
											Five sounds good.
										</div>
									</div>
								</div>
								<div className='faq-item'>
									<div className='faq-item-header'>
										What can I build?
									</div>
									<div className='faq-item-body'>
										<div className='faq-item-body-content'>
											You can build whatever your heart
											desires, whether it’s a web app,
											mobile app, hardware hack, or an
											open source tool. Our main focus is
											to br /ing you a learning experience
											where you can have fun, ask
											questions, and experiment with
											technology.
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							className='faq-item'
							style={{ width: "90%", margin: "5px auto" }}
						>
							<div className='faq-item-header'>
								I still have a question...
							</div>
							<div className='faq-item-body'>
								<div className='faq-item-body-content'>
									We’d be happy to help! Send the inquiry over
									to robovitics@vit.ac.in and we’ll get back
									to you as soon as possible or call +91 98673
									48865.
								</div>
							</div>
						</div>
					</div>

					<pre></pre>

					<pre></pre>
					<div id='spon'>
						<h1 align='center'>Our Sponsors</h1>
						<div className='spons'>
							<div className='ss'>
								<img
									className='sponlogo'
									src={img2}
									alt=''
									onclick="location.href='https://github.com/'"
								/>
							</div>
							<div className='ss'>
								<img className='sponlogo' src={img3} alt='' />
								<img
									className='sponlogo'
									src={img4}
									alt=''
									onclick="location.href='https://devfolio.co/'"
								/>
							</div>
							<div className='ss'>
								<img
									className='sponlogo'
									src={img5}
									alt=''
									onclick=" location.href='https://www.portis.io/'"
								/>
								<img
									className='sponlogo'
									src={img6}
									alt=''
									onclick="location.href='https://fold.money'"
								/>
								<img
									className='sponlogo'
									src={img7}
									alt=''
									onclick="location.href='https://matic.network/'"
								/>
							</div>
							<div className='ss'>
								<img
									className='sponlogo'
									src={img8}
									alt=''
									onclick="location.href='https://www.taskade.com/'"
								/>
								<img
									className='sponlogo'
									src={img9}
									alt=''
									onclick="location.href='https://www.wolfram.com/'"
								/>
								<img
									className='sponlogo'
									src={img10}
									alt=''
									onclick="location.href='https://www.framer.com/'"
								/>
								<img
									className='sponlogo'
									src={img11}
									alt=''
									onclick="location.href='https://www.bugsee.com'"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* <button
					id='devfolio-apply-now'
					onclick="window.location.href='https://devfolio.co/signin'"
				>scale(2)" 
						xmlns='http://www.w3.org/2000/svg'
						fill='#fff'
						viewBox='0 0 115.46 123.46'
						style={{
							height: "24px",
							width: "24px",
							margiRight: "8px",
						}}
					>
						<path d='M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z' />
						<path d='M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z' />
					</svg>
					Apply with Devfolio
				</button> */}
				<Button
					type='primary'
					size='large'
					style={{ transform: "scale(2)", marginBottom: "10%" }}
					onClick={ButtonClick}
				>
					Register Now
				</Button>
				<Form show={show} updateShow={updateShow} />
				<div className='footer-social-icons qwerty'>
					<pre></pre>
					<h1
						style={{
							textAlign: "center",
							color: " white",
							fontSize: "35px",
						}}
					>
						Social Media
					</h1>
					<ul
						className='social-icons'
						style={{ textAlign: "center" }}
					>
						<li>
							<a
								href='https://www.facebook.com/robovitics/'
								target='_blank'
								className='social-icon'
							>
								{" "}
								<i className='fa fa-facebook fa-2x text-primary mx-3'></i>
							</a>
						</li>
						<li>
							<a
								href='https://instagram.com/equinox_robovitics?igshid=28dks02s9hul'
								target='_blank'
								className='social-icon'
							>
								<i className='fa fa-instagram fa-2x text-primary mx-3'></i>
							</a>
						</li>
					</ul>
					<h1
						style={{
							textAlign: "center",
							color: "white",
							fontSize: "35px",
						}}
					>
						Contact Us
					</h1>
					<p style={{ fontWeight: " 600", fontSize: "medium" }}>
						Email : equinox.robovitics@gmail.com
					</p>
					<p style={{ fontWeight: "600", fontSize: "medium" }}>
						Phone: +91 94433 90416
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
