import Alphabet from "../shared/Alphabet"
import Footer from "../shared/Footer"
import Header from "../shared/Header"
import InfoLabel from "../shared/InfoLabel"

const Clients = () => {
  return (
    <div>
      <Header />
      <a href="/">go to Demo page</a>
      <div className="wrapper">
				<section className="content">
					<div className="main-content">
						<h2 className="main-content__title">Clients</h2>
						<div className="table-navigation">
							<a href="javascript:;" className="table-navigation__create btn-modal"><span>Create new client</span></a>
							<form className="table-navigation__input-container" action="javascript:;">
								<input type="text" className="table-navigation__search"/>
								<button type="submit" className="icon__search"></button>
							</form>
						</div>
            <Alphabet />
						<div className="accordion">
							<div className="accordion__intro">
								<h4 className="accordion__title">Client 1</h4>
							</div>
							<form className="accordion__content" action="javascript:;">
								<div className="info">
									<div className="info__form">
										<ul className="info__wrapper">
											<li className="info__list">
												<label className="info__label">Client name:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Address:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">City:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Zip/Postal code:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Country:</label>
												<select className="info__select">
													<option value="">All</option>
												</select>
											</li>
										</ul>
									</div>
								</div>
								<div className="btn-wrap">
									<button type="submit" className="btn btn--green"><span>Save changes</span></button>
									<button type="button" className="btn btn--red"><span>Delete</span></button>
								</div>
							</form>
						</div>
						<div className="accordion">
							<div className="accordion__intro">
								<h4 className="accordion__title">Client 2</h4>
							</div>
							<form className="accordion__content" action="javascript:;">
								<div className="info">
									<div className="info__form">
										<ul className="info__wrapper">
											<li className="info__list">
												<label className="info__label">Client name:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Address:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">City:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Zip/Postal code:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Country:</label>
												<select className="info__select">
													<option value="">All</option>
												</select>
											</li>
										</ul>
									</div>
								</div>
								<div className="btn-wrap">
									<button type="submit" className="btn btn--green"><span>Save changes</span></button>
									<button type="button" className="btn btn--red"><span>Delete</span></button>
								</div>
							</form>
						</div>
						<div className="accordion">
							<div className="accordion__intro">
								<h4 className="accordion__title">Client 3</h4>
							</div>
							<form className="accordion__content" action="javascript:;">
								<div className="info">
									<div className="info__form">
										<ul className="info__wrapper">
											{/* <li className="info__list">
												<label className="info__label">Client name:</label>
												<input type="text" className="in-text"/>
											</li> */}
                      <InfoLabel demoText="clinetName"/>
                      <InfoLabel demoText="clientAddress"/>
											{/* <li className="info__list">
												<label className="report__label">Address:</label>
												<input type="text" className="in-text"/>
											</li> */}
											<li className="info__list">
												<label className="report__label">City:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Zip/Postal code:</label>
												<input type="text" className="in-text"/>
											</li>
											<li className="info__list">
												<label className="report__label">Country:</label>
												<select className="info__select">
													<option value="">All</option>
												</select>
											</li>
										</ul>
									</div>
								</div>
								<div className="btn-wrap">
									<button type="submit" className="btn btn--green"><span>Save changes</span></button>
									<button type="button" className="btn btn--red"><span>Delete</span></button>
								</div>
							</form>
						</div>
					</div>
					<div className="pagination">
						<ul className="pagination__navigation">
							<li className="pagination__list">
								<a className="pagination__button" href="javascript:;">Previous</a>
							</li>
							<li className="pagination__list">
								<a className="pagination__button pagination__button--active" href="javascript:;">1</a>
							</li>
							<li className="pagination__list">
								<a className="pagination__button" href="javascript:;">2</a>
							</li>
							<li className="pagination__list">
								<a className="pagination__button" href="javascript:;">3</a>
							</li>
							<li className="pagination__list">
								<a className="pagination__button" href="javascript:;">4</a>
							</li>
							<li className="pagination__list">
								<a className="pagination__button" href="javascript:;">Next</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
      <Footer />
    </div>
  )
}

export default Clients
