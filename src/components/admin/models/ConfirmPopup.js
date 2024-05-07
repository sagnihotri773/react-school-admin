import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../../ui/card"
import { Button } from "../../ui/button"
import Dialog from '@material-ui/core/Dialog';

export default function ConfirmPopup(props) {

  return (
    <>
      <Dialog
        open={props.open}
        onClose={() => props.handleClose(2)}
        className="relative z-50"
      >
        <div className="w-96 p-0">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Are you sure?</CardTitle>
              <CardDescription>
                {props.message}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="mt-4 justify-center flex grid-cols-2 gap-4 p-4 border-t border-gray-200 dark:border-gray-800">
                <Button className="col-span-2" size="sm" variant="outline" onClick={() => props.handleClose(0)}>
                  {props.closeBtn}
                </Button>
                <Button disabled={props.statusChangeSuccess} className="col-span-2 text-red-500" variant="outline" size="sm" onClick={() => props.handleClose(1)}>
                  {props.confirmBtn}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Dialog>
    </>
  );
}
