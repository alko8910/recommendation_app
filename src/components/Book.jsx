import React, { useState } from 'react'
import { Button, Popover, Typography } from '@mui/material'

const Book = ({ author, img, title, publisher, pageCount, averageRating, ratingsCount }) => {
    const [open, setOpen] = useState(null);
    const openPopover = (event) => {
        setOpen(event.currentTarget)
    }

    return (
        <div style={{ border: '1px solid black' }}>
            <div className="book-item">
                <div><img src={img} alt='thumbnail'/></div>
                <div>{title}</div>
                <div>{author}</div>

                <Button onClick={openPopover}>
                    Details
                </Button>
            </div>
            <Popover
                open={Boolean(open)}
                anchorEl={open}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left'
                }}
                onClose={() => setOpen(null)} >

                <Typography variant='h6'>Publisher: {publisher}</Typography>
                <Typography variant='h6'>Page Count: {pageCount}</Typography>
                <Typography variant='h6'>Average Rating: {averageRating}</Typography>
                <Typography variant='h6'>Ratings Count: {ratingsCount}</Typography>
            </Popover>
        </div>
    )
}

export default Book
