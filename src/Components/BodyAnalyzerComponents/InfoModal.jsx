import { Modal, Button, UnstyledButton, rem } from "@mantine/core";
import styles from "../../scss/BodyAnalyzerComponents/InfoModal.module.scss";
export function PhyAttModal({ opened, onClose }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      title="Physical Attributes"
      radius={20}
      zIndex={1000}
      size={"lg"}
      classNames={{
        header: styles.header,
        title: styles.title,
        close: styles.close,
      }}>
      <div className={styles.container}>
        <div>Strength: Ability to exert force against resistance.</div>
        <div> Endurance: Capacity to sustain physical activity over time.</div>
        <div>Flexibility: Range of motion in joints and muscles.</div>
        <div>Speed: Rate of movement from one point to another.</div>
        <div>Balance: Stability and control of body position.</div>
        <div> Power: Ability to exert maximum force in minimal time.</div>
      </div>
    </Modal>
  );
}

export function PerfVidModal({ opened, onClose }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      title="Performance Videos"
      radius={20}
      zIndex={1000}
      size={"lg"}
      classNames={{
        header: styles.header,
        title: styles.title,
        close: styles.close,
      }}>
      <div className={styles.container}>
        Performance videos capture individuals performing various exercises,
        movements, or activities. Upload the videos to evaluate the overall
        physical attributes, including strength, endurance, flexibility, speed,
        balance, and power.
      </div>
    </Modal>
  );
}
