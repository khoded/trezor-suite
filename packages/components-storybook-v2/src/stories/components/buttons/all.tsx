import React from 'react';
import styled from 'styled-components';
import { Button } from '@trezor/components-v2';
import { storiesOf } from '@storybook/react';

const Wrapper = styled.div`
    padding: 2rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0 2rem;
    width: 400px;
`;

const ButtonWrapper = styled.div`
    margin-bottom: 1rem;
`;

storiesOf('Buttons', module).add(
    'All',
    () => {
        const variants = ['primary', 'secondary', 'tertiary', 'danger'] as const;
        const sizes = ['small', 'large'] as const;

        return (
            <Wrapper>
                {variants.map(variant => {
                    return (
                        <Row>
                            {sizes.map(size => {
                                return (
                                    <ButtonWrapper>
                                        <Button
                                            variant={variant}
                                            size={size}
                                            data-test={`button-${variant}-${size}`}
                                        >
                                            {variant[0].toUpperCase()}
                                            {variant.slice(1)} {size}
                                        </Button>
                                    </ButtonWrapper>
                                );
                            })}
                            <ButtonWrapper>
                                <Button
                                    variant={variant}
                                    data-test={`button-${variant}-icon`}
                                    icon="PLUS"
                                    onClick={() => {
                                        console.log('click');
                                    }}
                                >
                                    {variant[0].toUpperCase()}
                                    {variant.slice(1)} icon
                                </Button>
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Button
                                    variant={variant}
                                    data-test={`button-${variant}-icon-right`}
                                    icon="PLUS"
                                    alignIcon="right"
                                >
                                    {variant[0].toUpperCase()}
                                    {variant.slice(1)} icon right
                                </Button>
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Button
                                    variant={variant}
                                    data-test={`button-${variant}-loading`}
                                    isLoading
                                >
                                    {variant[0].toUpperCase()}
                                    {variant.slice(1)} loading
                                </Button>
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Button
                                    variant={variant}
                                    data-test={`button-${variant}-full-width`}
                                    fullWidth
                                >
                                    {variant[0].toUpperCase()}
                                    {variant.slice(1)} full width
                                </Button>
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Button
                                    variant={variant}
                                    isDisabled
                                    data-test={`button-${variant}-disabled`}
                                    onClick={() => {
                                        console.log('click');
                                    }}
                                >
                                    {variant[0].toUpperCase()}
                                    {variant.slice(1)} disabled
                                </Button>
                            </ButtonWrapper>
                        </Row>
                    );
                })}
            </Wrapper>
        );
    },
    {
        info: {
            disable: true,
        },
    }
);
