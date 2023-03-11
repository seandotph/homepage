import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'

const ItemContainer = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	gap: 1em;
	padding: 1em;
	max-height: 80px;
	.item-logo {
		/* width: 60px;
		height: 60px;
		 */
		border-radius: 25%;
	}
	.item-text {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		p {
			margin: 0;
			color: #e3e3e3;
		}
		.item-title {
			font-size: .875rem;
			line-height: 1.25rem;
			font-weight: 600;
		}
		.item-description {
			font-size: .75rem;
			line-height: 1rem;
			font-weight: 400;
		}
	}
`

const Item = ({
	title,
	description,
	image,
	href
}: { title: string, description: string, image: string, href: string }) => {
	return (
		<ItemContainer href={href} target='_blank'>
			<Image src={image} alt={title} className='item-logo' width={50} height={50} />
			<div className='item-text'>
				<p className='item-title'>{title}</p>
				<p className='item-description'>{description}</p>
			</div>
		</ItemContainer>
	)
}

const MainContainer = styled.main`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	align-items: flex-start;
	gap: 1em;

	h2 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: #e3e3e3;
		margin: 0;
	}
	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1280px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;

	// media queries

`

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sinag.ai Homepage</title>
				<meta name="description" content="Sinag.ai Homepage" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<MainContainer>
					<Container>
						<h2>Company</h2>
						{/* <Item
							title='Sinag.ai'
							description='Company website'
							href='https://sinag.ai'
							image='/company.png'
						/>
						<Item
							title='Dashboard'
							description='Company dashboard'
							href='https://dash.sinag.ai'
							image='/company.png'
						/>
						<Item
							title='Status Page'
							description='Company status page'
							href='https://status.sinag.ai'
							image='/company.png'
						/> */}
					</Container>
					<Container>
						<h2>Team</h2>
						<Item
							title='Slack'
							description='Team communication'
							href='https://sinagai.slack.com'
							image='/slack.svg'
						/>
						<Item
							title='Gmail'
							description='Company mail'
							href='https://mail.google.com/a/sinag.ai'
							image='/gmail.svg'
						/>
						<Item
							title='Notion'
							description='Knowledgebase and project management'
							href='https://sinagai.notion.site'
							image='/notion.svg'
						/>
						<Item
							title='Google Drive'
							description='File storage and sharing'
							href='https://drive.google.com/a/sinag.ai'
							image='/gdrive.svg'
						/>
						{/* <Item
							title='Google Workspace'
							description='Mail, storage, and collaboration'
							href='https://workspace.google.com/dashboard'
							image='/google.svg'
						/> */}
					</Container>
					
					<Container>
						<h2>Development</h2>
						<Item
							title='GitHub'
							description='Source code collaboration'
							href='https://github.com/sinagdotai'
							image='/gh.svg'
						/>
						<Item
							title='Doppler'
							description='Secrets management'
							href='https://dashboard.doppler.com/workplace/141fa09aca121da36796'
							image='/doppler.png'
						/>
					</Container>

					<Container>
						<h2>Infrastructure</h2>
						<Item
							title='Google Cloud Platform'
							description='Cloud computing'
							href='https://console.cloud.google.com/home/dashboard'
							image='/gcp.svg'
						/>
						<Item
							title='Amazon Web Services'
							description='Cloud computing'
							href='https://console.aws.amazon.com/console/home'
							image='/aws.svg'
						/>
						<Item
							title='Cloudflare'
							description='Domain and DNS management'
							href='https://dash.cloudflare.com/8b2c77dfaad4d2bb85be37cf155cc3ef'
							image='/cf.svg'
						/>
					</Container>
					
					<Container>
						<h2>Marketing</h2>
						<Item
							title='Adobe Creative Cloud'
							description='Multimedia design'
							href='https://dash.cloudflare.com/8b2c77dfaad4d2bb85be37cf155cc3ef'
							image='/adobe.svg'
						/>
					</Container>
					<Container>
						<h2>Sales</h2>
						<Item
							title='Maya Business'
							description='Payment processor'
							href='https://pbm.paymaya.com/'
							image='/maya.png'
						/>
					</Container>
					<Container>
						<h2>Human Resources</h2>
						{/* <Item
							title='Payroll'
							description='Internal HR and payroll system'
							href='https://portal.unionbankph.com/business/login'
						/> */}
						<Item
							title='UnionBank'
							description='Corporate banking'
							href='https://portal.unionbankph.com/business/login'
							image='/ub.png'
						/>
					</Container>
					
					


				

				</MainContainer>
			
			</main>
		</div>
	)
}
