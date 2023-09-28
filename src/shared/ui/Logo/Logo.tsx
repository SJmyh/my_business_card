import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Logo.module.scss';
import { HStack, VStack } from '../Stack';
import { Text } from '../Text';

export const Logo = () => {
    return (
        <HStack
            className={classNames(cl.logo, {}, [])}
            justify='center'
        >
            <VStack align='center'>
                <Text size="xs" title="Shestopalov" />
            </VStack>
        </HStack>
    )
}