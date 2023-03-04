import { Card } from "~/components/product-preview-card/Card";
import { Page } from "~/components/product-preview-card/Page";
import { Layout } from "~/components/product-preview-card/Layout";
import { ProductImage } from "~/components/product-preview-card/ProductImage";
import { Container } from "~/components/product-preview-card/Container";
import { Button } from "~/components/product-preview-card/Button";
import { Prices } from "~/components/product-preview-card/Prices";

export default function ProductPreviewCard() {
  return (
    <>
      <Page>
        <Card>
          <Layout>
            <ProductImage />
            <Container>
              <h2 className="uppercase font-montserrat tracking-[5px] text-ppc-dark-gray-blue font-medium text-[12px]">
                Perfume
              </h2>
              <h1 className="font-fraunces text-ppc-dark-blue text-[32px] leading-[32px] font-bold mt-3 sm:mt-5">
                Gabrielle Essence Eau De Parfum
              </h1>
              <p className="font-montserrat mt-4 sm:mt-6 text-ppc-dark-gray-blue font-medium text-[14px] leading-[23px]">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <Prices />
              <Button />
            </Container>
          </Layout>
        </Card>
      </Page>
    </>
  );
}
