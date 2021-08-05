import React from 'react'
import ContentBox from './ContentBox'

const BookApprovalSys = () => {
    const initialState={
        'pending':false,
        'approved':false
    }

    const tabNames=['Pending Books','Approved Books']
    return (
        <ContentBox initialState={initialState} tabNames={tabNames}/>
    )
}

export default BookApprovalSys
