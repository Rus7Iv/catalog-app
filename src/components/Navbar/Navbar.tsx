import { CommandBar } from '@fluentui/react';
import { useItems } from './types/enum';

const Navbar = () => {
  const items = useItems();

  return <CommandBar items={items} />;
};

export default Navbar;