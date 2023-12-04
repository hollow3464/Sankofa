import './reportLog.css'

function ReportLog() {
  return (
    <>
        <section className='reportLog-container'>
            <div className='reportLog-images'>
                <img src='/assets/images/build_reports.png' alt='building' className='building-report' />
                <img src='/assets/images/book_reports.png' alt='notice' className='book-report' />
            </div>
            <div className='report-polygon'>
            <h4 style={{fontWeight: 700}}>Mis reportes</h4>
            </div>
        </section>
    </>
  )
}

export default ReportLog