import 'package:flutter/material.dart';
import 'package:notebook/add_page.dart';
import 'package:notebook/data.dart';


class Pages extends StatelessWidget {
  const Pages({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.endContained,
      body: SingleChildScrollView(
        child: Container(
          child: Center(
            child: Column(children: [
              const Text(
                "Pages",
                style: TextStyle(fontSize: 30, color: Colors.red),
              ),
              ...paged.map((String Para) {
                return Card(
                  child: ListTile(title: Text(Para)),
                );
              }).toList(),
              FloatingActionButton.extended(
                onPressed: () {
                  // Add your onPressed code here!
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => AddPage()));
                },
                label: const Text('Add Page'),
                icon: const Icon(Icons.add),
              ),
            ]),
          ),
        ),
      ),
    );
  }
}
