import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const EnterForm = () => {
  return (
    <div>
        <Form>
            <Form.Group>
                <Form.Label>名前を入力してください</Form.Label>
                <Form.Control type="name" placeholder="User Name" />
            </Form.Group>
            <Link to="/game">
                <Button>
                    ゲームをはじめる
                </Button>
            </Link>
        </Form>
        
        
    </div>
   
  )
}

export default EnterForm