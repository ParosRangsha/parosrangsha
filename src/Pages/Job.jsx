import React from 'react'
import Container from '../Components/Container'

const Job = () => {
  return (
    <div className="pt-[80px]">
        <Container>
            <h1 className="text-[18px] font-bold">Job Experience</h1>
            <div className="lg:flex">
                <div className="pt-[20px] lg:w-1/2">
                    <h2 className="text-xl font-semibold text-blue-700">Officer – ERP & Final Inspection</h2>
                    <p className="text-gray-700">Paramount Textile PLC • Bangladesh</p>
                    <p className="text-sm text-gray-500 italic">~5 Years (Currently Working)</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-[10px] lg:text-[16px]">
                        <li>Managing ERP data for production and final inspections.</li>
                        <li>Preparing inspection reports and maintaining records.</li>
                        <li>Coordinating with production and planning teams for seamless workflow.</li>
                        <li>Identifying and resolving product quality issues.</li>
                        <li>Handling documentation and data entry using ERP software.</li>
                    </ul>
                </div>
                <div className='pt-[20px] lg:w-1/2'>
                    <h2 className="text-xl font-semibold text-blue-700">Data Entry Operator</h2>
                    <p className="text-gray-700">Golden Harvest InfoTech Ltd • Bangladesh</p>
                    <p className="text-sm text-gray-500 italic">02 Years</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-[10px] lg:text-[16px]">
                        <li>Accurate and efficient entry of large data volumes.</li>
                        <li>Maintaining and organizing digital files and databases.</li>
                        <li>Performing data quality checks to ensure accuracy.</li>
                        <li>Supporting team with various back-office tasks.</li>
                        <li>Working with confidential data while maintaining integrity.</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>

  )
}

export default Job