import React from "react";
import {
    Panel,
    PanelHeader,
    Div,
    Avatar,
    Title,
    Group,
    Cell,
    Header
} from '@vkontakte/vkui';

import ava from '../img/ava.jpg'

function main(props) {
    return (
        <Panel id={props.id}>
            <PanelHeader>Арбузик</PanelHeader>
            <Group>
                <Div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <Avatar style={{height:96, width:96}} size={96} src="data:image/jpeg;base64,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"/>
                    <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Команда вездекод</Title>
    
                </Div>
            </Group>
            <Group header={<Header>Участники</Header>}>
                <Cell 
                    before={<Avatar size={48} 
                    src={ava}
                    />}
                    onClick={props.go}
                    data-to="about"
                > Вадим Егоров </Cell>
            </Group>
        </Panel>
    )
}

export default main;