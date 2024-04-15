import React from "react";
import {
  Card,
  TextInput,
  Button,
  Paper,
  Text,
  Divider,
  Stack,
  Group,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import styles from "../scss/CheckoutPage.module.scss";
function CheckoutPage(props) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationRules: {
      cardNumber: (value) =>
        value.length === 16 || "Card number must be 16 digits",
      expiryDate: (value) =>
        value.length === 5 || "Expiry date must be in the format MM/YY",
      cvv: (value) => value.length === 3 || "CVV must be 3 digits",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Paper
          className={styles.paper}
          radius="md"
          p="xl"
          withBorder
          {...props}
        >
          <Text ta="center" size="lg" fw={500}>
            Card Information
          </Text>
          <Divider />
          <form onSubmit={form.onSubmit}>
            <Stack>
              <TextInput
                label="Card Number"
                value={form.values.cardNumber}
                onChange={(event) =>
                  form.setFieldValue("cardNumber", event.currentTarget.value)
                }
                error={form.errors.cardNumber}
              />
              <TextInput
                label="Expiry Date"
                value={form.values.expiryDate}
                onChange={(event) =>
                  form.setFieldValue("expiryDate", event.currentTarget.value)
                }
                error={form.errors.expiryDate}
              />
              <TextInput
                label="CVV"
                value={form.values.cvv}
                onChange={(event) =>
                  form.setFieldValue("cvv", event.currentTarget.value)
                }
                error={form.errors.cvv}
              />
              <Group>
                <Text w={370} style={{ fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ fontWeight: "bold" }}>200 ฿</Text>
              </Group>

              <Button
                type="submit"
                style={{ backgroundColor: "#007458" }}
                onClick={() => {
                  props.updateteir(true); 
                  navigate("/home"); 
                }}
              >
                Pay Now
              </Button>
            </Stack>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default CheckoutPage;
