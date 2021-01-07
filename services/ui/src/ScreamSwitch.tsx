import './ScreamSwitch.css';

import { Button, ButtonGroup } from "reactstrap";

type ScreamSwitchProps = {
  active: boolean;
  switchAction: any;
};

function ScreamSwitch({ active, switchAction }: ScreamSwitchProps) {
  return (
    <div className="ScreamSwitch">
      <h5>Scream Mode</h5>
      <ButtonGroup>
        <Button
          color="info"
          onClick={() => switchAction(true)}
          active={active}
          outline={!active}
        >
          On
        </Button>
        <Button
          color="info"
          onClick={() => switchAction(false)}
          active={!active}
          outline={active}
        >
          Off
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ScreamSwitch;
