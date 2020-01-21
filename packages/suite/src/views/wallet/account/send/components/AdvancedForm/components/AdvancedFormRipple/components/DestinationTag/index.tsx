import React from 'react';
import styled from 'styled-components';
import { Input, Icon, colors } from '@trezor/components-v2';
import { VALIDATION_ERRORS } from '@wallet-constants/sendForm';
import { getInputState } from '@wallet-utils/sendFormUtils';
import { Translation } from '@suite-components/Translation';
import { State } from '@wallet-types/sendForm';
import messages from '@suite/support/messages';
import { Props as ContainerProps } from '../../Container';

interface Props {
    errors: State['networkTypeRipple']['destinationTag']['error'];
    destinationTag: State['networkTypeRipple']['destinationTag']['value'];
    sendFormActionsRipple: ContainerProps['sendFormActionsRipple'];
}

const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const StyledIcon = styled(Icon)`
    cursor: pointer;
    display: flex;
    padding-left: 5px;
    height: 100%;
`;

const getErrorMessage = (error: Props['errors']) => {
    switch (error) {
        case VALIDATION_ERRORS.NOT_NUMBER:
            return <Translation {...messages.TR_DESTINATION_TAG_IS_NOT_NUMBER} />;
        default:
            return null;
    }
};

const NetworkTypeXrp = (props: Props) => (
    <Input
        state={getInputState(props.errors, props.destinationTag)}
        display="block"
        variant="small"
        topLabel={
            <Label>
                <Translation {...messages.TR_XRP_DESTINATION_TAG} />
                <StyledIcon icon="QUESTION" color={colors.BLACK0} size={12} />
            </Label>
        }
        bottomText={getErrorMessage(props.errors)}
        value={props.destinationTag || ''}
        onChange={e => props.sendFormActionsRipple.handleDestinationTagChange(e.target.value)}
    />
);

export default NetworkTypeXrp;
