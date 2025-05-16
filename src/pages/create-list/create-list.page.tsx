import { Card } from '../../components/card';
import { Footer } from '../../components/footer/footer';
import { Form } from '../../components/form/form';

export function CreateListPage() {
  return (
    <Card>
      <div className="flex flex-col max-w-6xl grow w-full mx-auto space-y-10">
        <Form />

        <div className="mt-auto flex items-center justify-center gap-12 w-full flex-wrap items-center">
          <Footer />
          <img
            src="/sacolas.png"
            alt="sacolas"
            className="max-w-[10rem] md:max-w-[12rem]"
          />
        </div>
      </div>
    </Card>
  );
}
