import React from "react"
import { Row } from "../../Shared/Grid"

export const CartModal: React.FC = () => {
    return <Row width={10} height={10}>
        <Row width={10} height={10}>+</Row>
        <Row width={10} height={10}>Quantidade</Row>
        <Row width={10} height={10}>-</Row>
    </Row >
}