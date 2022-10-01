import { ActionIcon, Box, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position='center' mt='xl'>
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size='xl'
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {colorScheme === 'dark'
                    ? <Box>Light</Box>
                    : <Box>Dark</Box>
                }
            </ActionIcon>
        </Group>
    );
}
