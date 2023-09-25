import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Logo.module.scss';
import { HStack, VStack } from '../Stack';

export const Logo = () => {
    return (
        <HStack
            className={classNames(cl.logo, {}, [])}
            justify='center'
        >
            <VStack align='center'>
                Shestopalov
            </VStack>
        </HStack>
    )
}